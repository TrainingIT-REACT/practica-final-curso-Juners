import React from 'react';
import { render } from 'enzyme';

import AlbumList from '../components/AlbumList';
import { MemoryRouter } from 'react-router-dom';

describe(AlbumList, () => {
  describe("Render", () => {

    it('renders correctly', () => {
      const wrapper = render(
        <MemoryRouter>
          <AlbumList albums={[
            { id: 1, name: "first" },
            { id: 2, name: "second" }
          ]} />
        </MemoryRouter>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("has two elements", () => {
      const wrapper = render(
        <MemoryRouter>
          <AlbumList albums={[
            { id: 1, name: "first" },
            { id: 2, name: "second" }
          ]} />
        </MemoryRouter>
      );
      expect(wrapper.find("div.album").length).toBe(2);
      expect(wrapper.find("div.album").first().text()).toBe("first");
      expect(wrapper.find("div.album").last().text()).toBe("second");
    });

    it("has no elements", () => {
      const wrapper = render(
        <MemoryRouter>
          <AlbumList />
        </MemoryRouter>
      );
      expect(wrapper.find("div.album").length).toBe(0);
    });

  });
});