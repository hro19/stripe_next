import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../pages/demo/search';

describe('App', () => {
  test('テキストがあるかの確認', () => {
    render(<Search />);

    screen.getByText('Searchテキスト:');
  });

  test('テキストがあるかの確認2', () => {
    render(<Search />);

    // テキストが複数の要素に分割されている場合、getByTextを使用してテキストを検索します。
    screen.getByText(/Searches for/i);
  });
});