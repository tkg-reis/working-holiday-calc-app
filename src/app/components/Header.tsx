import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 ">
      <h1>ワーキングホリデー充実度計算アプリ</h1>
      <ul className="flex justify-center items-center">
        <li className="mx-3">
          <Link href="/about">about</Link>
        </li>
        <li className="mx-3">
          <Link href="/opinion">opinion</Link>
        </li>
        <li className="mx-3">
          <Link href="/article">article</Link>
        </li>
        <li className="mx-3">
          <Link href="/news">news</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
