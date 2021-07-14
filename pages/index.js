import Head from 'next/head';
import Image from 'next/image';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles/index.js';
import { Layout } from '../components/templates/Layout';

import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Main } from '../components/sections/Main';
import { About } from '../components/sections/About';
import { Works } from '../components/sections/Works';
import { Skills } from '../components/sections/Skills';
import { Blogs } from '../components/sections/Blogs';

export default function Home() {
  const ref = useRef(null);
  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, []);
  const setAnimation = () => {
    gsap.fromTo(
      '.section',
      { opacity: 0, y: 10 }, //fromの設定
      {
        //toの設定
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '.section',
          start: 'top center', //要素のトップが、画面の中央まできたら開始
          end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          onEnter: () => {
            console.log('scroll In');
          },
          onEnterBack: () => {
            console.log('scroll Back');
          },
        },
      }
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>
          <Main />
        </div>
        <div className="section">
          <About />
        </div>
        <div className="section" ref={ref}>
          <Works />
        </div>

        <Skills />
        <Blogs />
      </Layout>
    </ThemeProvider>
  );
}
