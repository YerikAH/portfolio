export function verifyName(value: string) {
  const regexName = /^[a-zA-Z]{1,20}$/;
  if (!regexName.test(value)) {
    return false;
  } else if (value.length <= 5) {
    return false;
  } else {
    return true;
  }
}

export function verifyEmail(value: string) {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(value)) {
    return false;
  } else if (value.length <= 5) {
    return false;
  } else {
    return true;
  }
}

export function verifyMessage(value: string) {
  if (value.length >= 255) {
    return false;
  } else if (value.length <= 5) {
    return false;
  } else {
    return true;
  }
}
