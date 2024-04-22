import {useRef} from 'react';

export function CustomInput({
  label,
  isRequire = false,
  showValidMessage = true,
  invalidMessage = '',
  value = '',
  setValue,
  check,
  validate,
  setFormCheck,
  isFormSent,
  type = 'input',
  className,
}) {
  const forceCheck = useRef(false);
  if (check) {
    forceCheck.current = check;
  }
  if (isFormSent) {
    forceCheck.current = !isFormSent;
  }
  const isValid = forceCheck ? validate(value) : true;

  return type === 'input' ? (
    <div className="">
      <div className="displayBlock">
        <input
          className={`${className} ${getInputStyleClasses(
            forceCheck.current ? isValid : true,
          )}`}
          placeholder="Insert Email Address"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            forceCheck.current = false;
            setFormCheck(false);
          }}
          autoComplete="off"
          spellCheck="false"
        />
        <label className="">
          {label} {isRequire && <span className="text-red-500">*</span>}
        </label>
      </div>
      {isValid || !forceCheck.current || !showValidMessage ? (
        ''
      ) : (
        <p className={`text-red-500 relative top-full text-xs`}>
          {invalidMessage} &nbsp;
        </p>
      )}
    </div>
  ) : (
    <div className="">
      <div className="">
        <textarea
          className={`${className} ${getInputStyleClasses(
            forceCheck.current ? isValid : true,
          )} h-56 resize-none`}
          placeholder=" "
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            forceCheck.current = false;
            setFormCheck(false);
          }}
          spellCheck="false"
        />
        <label className="text-sm form-label">
          {label} {isRequire && <span className="text-red-500">*</span>}
        </label>
      </div>
      {isValid || !forceCheck.current ? (
        ''
      ) : (
        <p className={`text-red-500 relative top-full text-xs`}>
          {invalidMessage} &nbsp;
        </p>
      )}
    </div>
  );
}

export const INPUT_STYLE_CLASSES = 'test';

export const getInputStyleClasses = (valid) => {
  return `${INPUT_STYLE_CLASSES} ${
    valid ? 'border-black/20' : 'border-red-500'
  }`;
};
