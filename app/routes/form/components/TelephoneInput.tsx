import { ChangeEvent, useState } from 'react';

const formatPhoneNumber = (value: string): string => {
  // Remove non-digit characters
  const phoneNumber = value.replace(/\D/g, '');

  // US phone number format: (123) 456-7890
  if (phoneNumber.length === 10) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '(\$1) \$2-\$3');
  }

  // Canadian phone number format: +1 (123) 456-7890
  if (phoneNumber.length === 11 && phoneNumber.startsWith('1')) {
    return phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+\$1 (\$2) \$3-\$4');
  }

  // Return the original value if it doesn't match the expected formats
  return value;
};

interface TelephoneInputProps {
  id:string;
  name: string;
  value: string;
  className: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TelephoneInput = ({ name, value,className, onChange, ...props }: TelephoneInputProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>(value);

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
    onChange({ ...event, target: { ...event.target, name, value: formattedValue } });
  };

  return (
    <input
      type="tel"
      name={name}
      value={phoneNumber}
      className={className}
      onChange={handlePhoneNumberChange}
      {...props}
    />
  );
};

export default TelephoneInput;