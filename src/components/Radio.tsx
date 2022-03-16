import { Field } from 'formik';

interface RadioProps {
  name: string;
  label: string;
  value: any;
  disabled?: boolean;
}

export default function Radio({ ...props }: RadioProps) {
  return (
    <div className="items-center flex">
      <label
        htmlFor={props.name}
        className={props.disabled ? 'label-disabled' : ''}
      >
        <Field
          type="radio"
          className="radiobutton"
          name={props.name}
          value={props.value}
          disabled={props.disabled}
        />
        <span className="pl-1">{props.label}</span>
      </label>
    </div>
  );
}

Radio.defaultProps = {
  disabled: false,
};
