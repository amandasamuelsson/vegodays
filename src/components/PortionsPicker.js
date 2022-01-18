/*import React from 'react';
import { PickerView } from '@ant-design/react-native';
const portions = [
  [
    {
      label: '2',
      value: '2',
    },
    {
      label: '4',
      value: '4',
    },
    {
      label: '6',
      value: '6',
    },
  ],
  

];
export default class PortionsPicker extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: undefined,
    };
    this.onChange = value => {
      this.setState({
        value,
      });
    };
  }
  render() {
    return (
      <PickerView
        onChange={this.onChange}
        value={this.state.value}
        data={portions}
        cascade={false}
      />
    );
  }
}
*/

export default PortionsPicker;
