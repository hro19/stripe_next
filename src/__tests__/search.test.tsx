import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../pages/demo/search';

describe('serchテスト', () => {
  test('テキストがあるかの確認', () => {
    render(<Search />);

    screen.getByText('Searchテキスト:');
  });

  test('テキストがあるかの確認2', () => {
    render(<Search />);

    // テキストが複数の要素に分割されている場合、getByTextを使用してテキストを検索します。
    screen.getByText(/Searches for/i);
  });

  test('SearchテキストがあるのかtoBeInTheDocumentによる確認', () => {
    render(<Search />);

    // fails
    expect(screen.queryByText('Searchテキスト')).not.toBeInTheDocument();

    // succeeds
    expect(screen.getByText('Searchテキスト:')).toBeInTheDocument();

    // succeeds
    expect(screen.getByText(/Searches for/i)).toBeInTheDocument();
  });
});