import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { App } from '@/components/App/App'

describe('App - Main Content', async () => {
    it('should render the top text', ()=>{
        render(<App />)

        expect(screen.getByText(/my phot/i)).toBeInTheDocument()
    })
    it('should render the bottom text', ()=>{
        render(<App />)

        expect(screen.getByText(/ografies/i)).toBeInTheDocument()
    })
    it('should render the body photo Image', ()=>{
        render(<App />)
        //Pega todas as Alt Text, não importando o número
        expect(screen.getAllByAltText(/My Body Photo.*?/i))
    })
    it('should render the face photo Image', ()=>{
        render(<App />)

        expect(screen.getAllByAltText(/My Face Photo.*?/i))
    })
})