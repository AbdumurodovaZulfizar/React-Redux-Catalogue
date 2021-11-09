import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import FilteredPage from '../../components/FilteredPage';
import store from '../../store';

test('should render filterpage page correctly', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <FilteredPage />
      </Provider>
    </BrowserRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
