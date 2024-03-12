import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

test('SearchテキストがあるのかgetByRoleによる確認', () => {
  render(<Search />);

  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByLabelText(/Searchテキスト:/i)).toBeInTheDocument();
  //他の例
  // LabelText: getByLabelText: <label for="search" />
  // PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
  // AltText: getByAltText: <img alt="profile" />
  // DisplayValue: getByDisplayValue: <input value="JavaScript" />
});

test('文字入力のテスト', async () => {
  render(<Search />);
 
  // 未入力
  expect(await screen.getByText('Searches for ...')).toBeInTheDocument();

  // inputフィールドに文字を入力
  const input = screen.getByRole('textbox');
  userEvent.type(input, '文字文字');
 
  // 入力されたテキストが表示されていることを確認
  expect(await screen.findByText('Searches for 文字文字')).toBeInTheDocument();
 });

  test('ユーザー名を非同期（useEffect）で取得して表示', async () => {
    render(<Search />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    expect(await screen.findByText("Signed in as Robin")).toBeInTheDocument();
  });
