import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });

  it('should render correct amount of shows', () => {
    const component = shallow(<Search />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('should render correct amount of shows based on search term', () => {
    const component = shallow(<Search />);
    const searchWord = 'Black';
    component.find('input').simulate('change', { target: { value: searchWord } });
    const showCount = preload.shows.filter(
      show =>
        `${show.title} ${show.description}`.toLowerCase().indexOf(searchWord.toLowerCase()) > -1
    ).length;
    expect(component.find(ShowCard).length).toEqual(showCount);
  });
});
