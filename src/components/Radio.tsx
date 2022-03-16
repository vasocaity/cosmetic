import { Field } from 'formik';

interface RadioProps {
  name: string;
  label: string;
  value: any;
  disabled?: boolean;
}

export default function Radio({ ...props }: RadioProps) {
  const labelDisabled = props.disabled ? 'label-disabled' : '';
  return (
    <>
      <Field
        type="radio"
        className="radiobutton"
        name={props.name}
        value={props.value}
        disabled={props.disabled}
      />
      <span className={`px-1 ${labelDisabled}`}>{props.label}</span>
    </>
  );
}

Radio.defaultProps = {
  disabled: false,
};
