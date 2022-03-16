import { Field } from 'formik';

interface RadioGroupProps {
  radios: RadioProps[];
}

interface RadioProps {
  name: string;
  label: string;
  value: string;
  disabled?: boolean;
  className?: string;
}

function Radio({ ...props }: RadioProps) {
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
      <span className={`pl-[4px] pt-[4px] pr-[6px] pb-[6px] ${labelDisabled}`}>
        {props.label}
      </span>
    </>
  );
}

Radio.defaultProps = {
  disabled: false,
  className: null,
};

export default function RadioGroup({ radios }: RadioGroupProps) {
  return (
    <div className="flex items-center mb-3">
      {radios.map((radio) => (
        <Radio
          key={`radio-${radio.name}-${radio.value}`}
          label={radio.label}
          name={radio.name}
          value={radio.value}
          disabled={radio.disabled}
        />
      ))}
    </div>
  );
}
