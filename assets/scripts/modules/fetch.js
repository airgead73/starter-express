import { getAttrs } from './utils';
import { openAlert, openPreview, toggleSpinner } from './modals';
import { checkField } from './formValidation';

const previewFile = ($target) => {

  const file = ($target).files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const src = reader.result;
    $target.setAttribute('data-photo', src);
    openPreview(src, false);
  }

}

const compileBody = ($target) => {

  let body = new Object;

  let formElements = Array.from($target.elements);

  formElements = formElements.filter(element => {
    if(element.hasAttribute('name')) return element;
  });

  formElements.forEach(element => {
    const property = element.getAttribute('name');
    const isFile = element.getAttribute('type') === 'file';
    let value;

    if(isFile) {
      value = element.getAttribute('data-photo');
    } else {
      value = $target[property].value;
    }

    body[property] = value;    

  });

  body = JSON.stringify(body);

  return body;
  
}

const compileRequest = ($target) => {

  const attrs = getAttrs($target);
  let url, method;

  if($target.tagName === 'FORM') {
    url = attrs.action;
    method = attrs.method;
  } else if($target.tagName === 'BUTTON') {
    url = attrs["data-action"];
    method = attrs["data-method"];
  } else {
    console.error('attribute error');
  }

  const needsBody = method === 'POST' || method === 'PUT' || method === 'PATCH';

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    }
  }

  if(needsBody) options.body = compileBody($target);

  const request = new Request(url, options);

  return request;
 
}

const apiFetch = async($target) => {

  try {

    toggleSpinner('open');

    const request = compileRequest($target);
    const response = await fetch(request);
    const json = await response.json();

    const { message } = json;

    toggleSpinner('close');

    if(!response.ok) {

      const { errors } = json;      
      let messageStr;

      errors.forEach((error, index) => {
        const field = $target.querySelector(`[name="${error.param}"]`);
        field.setAttribute('aria-invalid', 'true');
        field.addEventListener('blur', function(e) {
          checkField(e.target);
        });
        if(index === 0) {
          messageStr = error.msg;
        } else {
          messageStr = messageStr + ' ' + error.msg;
        }

      });

      openAlert('error', messageStr);           

    } else {

      openAlert('success', message, true);

    }

  } catch(err) {

    openAlert('error', 'Resource not found.')

  }

}

export {
  apiFetch,
  previewFile
};