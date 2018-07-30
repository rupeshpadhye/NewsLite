import React from 'react';
import { shallow } from 'enzyme';
import HeaderTitle from '../../components/HeaderTitle';
describe('<HeaderTitle /> test suite',() =>{
    let props;
    let wrapper;
    beforeEach(() => {
        props = {
          header: 'Test Title',
        };
        wrapper = shallow(<HeaderTitle {...props} />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('has header-title class', () => {
        expect(wrapper.is('.header-title')).toEqual(true);
    });

    it('has has Test title', () => {
        const div = wrapper.find('.header-title');
        expect(div.text()).toBe('Test Title');
    });

  
})
