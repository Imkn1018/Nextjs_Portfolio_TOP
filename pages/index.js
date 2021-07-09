import Head from 'next/head';
import Image from 'next/image';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles/index.js';
import { Layout } from '../components/templates/Layout';

import {Main} from "../components/sections/Main"
import {About} from "../components/sections/About"
import {Works} from "../components/sections/Works"
import {Skills} from "../components/sections/Skills"
import {Blogs} from "../components/sections/Blogs"



export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Main />
        <About />
        <Works />
        <Skills />
        <Blogs />
      </Layout>
    </ThemeProvider>
  );
}
