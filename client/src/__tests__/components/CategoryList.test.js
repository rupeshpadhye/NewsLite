import React from 'react';
import { shallow, mount } from 'enzyme';
import CategoryList from '../../components/CategoryList';
import {categories} from '../../util'
describe('<CategoryList/>  test suite',() =>{
    it('has category-group class', () => {
        const props = {
            categories:[]
        }
        const wrapper = shallow(<CategoryList {...props} />);
        expect(wrapper.is('.category-group')).toEqual(true);
    });

    it('category item clicked', () => {
        const onCategoryClicked = jest.fn();
        const wrapper = mount(<CategoryList categories={categories} onCategoryClicked={onCategoryClicked} />);
        const div = wrapper.find('.trending');
        div.simulate('click');
        expect(onCategoryClicked).toBeCalledWith('trending');
    });
})

