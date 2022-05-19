import App from './App';
import { mount } from 'enzyme';

it('should load the original webpage', () => {
	let wrapper = mount(<App />);
	//console.log(wrapper.debug());
	let findp = wrapper.find('p').length;
	expect(findp).toBe(1);
})
