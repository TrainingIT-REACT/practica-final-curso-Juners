import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../App';

describe(App, () => {
  describe("user signed in", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App user={{ signedIn: false }} />);
    })

    it('renders correctly not signed in', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("user signed in", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App user={{ signedIn: true }} />);
    })

    it('renders correctly signed in', () => {
      expect(wrapper.find("nav#main-menu .menu li").last().text()).toBe("Profile");
    });
  });
});
