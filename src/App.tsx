import './App.css'
import Sketch from './Sketch'
import {LazyMotion, domAnimation, m, useScroll, useTransform} from 'framer-motion'

export default function App() {
  const {scrollY} = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 2])
  const opacity = useTransform(scrollY, [0, 800], [1, 0])
  
  return (
    <LazyMotion features={domAnimation}>
      <main>
        <div className="container">
          <Sketch />
          <m.h1 style={{scale, opacity}}></m.h1>
        </div>
      </main>
    </LazyMotion>
  )
}