import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

// TODO - Remove this import and replace with Bootstrap color modes when v5.3.0 is released.
import './dark-mode.css';

const DarkModeSwitcher: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const initialize = useCallback((checked: boolean) => {
    if (checked) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkSwitch', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('darkSwitch');
    }
  }, []);

  useEffect(() => {
    const darkThemeChecked =
      localStorage.getItem('darkSwitch') !== null &&
      localStorage.getItem('darkSwitch') === 'dark';

    const systemPreferred = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const checked = darkThemeChecked || systemPreferred;
    setChecked(checked);
    initialize(checked);
  }, []);

  const handleSwitchChange = useCallback(() => {
    // Note: There is probably a better way to do this.
    const darkSwitch = document.getElementById('dark-switch');
    // @ts-ignore
    const checked = darkSwitch?.checked;

    if (checked !== null) {
      setChecked(checked);
      initialize(checked);
    }
  }, []);

  return (
    <Form.Switch
      id="dark-switch"
      label="Dark Mode"
      onChange={handleSwitchChange}
      checked={checked}
    />
  );
};

export default DarkModeSwitcher;
