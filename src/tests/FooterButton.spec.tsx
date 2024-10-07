import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { FooterButton } from '@/components/button/FooterButton'

describe('Footer - Footer Button Content', async () => {
    it('should render the scroll to top button', ()=>{
        render(<FooterButton />)

        expect(screen.getByText(/GoToTop/i)).toBeInTheDocument()
    })
})