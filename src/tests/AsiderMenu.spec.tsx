import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '../../vitest-setup'
import '@testing-library/jest-dom/vitest'
import { AsiderMenu } from '@/components/menu/AsiderMenu'

describe('Header - AsiderMenu Component', () => {
  
  it("should render menu icon initially", () => {
    render(<AsiderMenu />)
    
    // Verifica se o ícone de menu está presente inicialmente
    const menuIcon = screen.getByTestId('menu-icon')
    expect(menuIcon).toBeInTheDocument()
  })

  it("should open menu and display close icon when menu icon is clicked", async () => {
    render(<AsiderMenu />)

    // Clica no ícone de menu
    const menuIcon = screen.getByTestId('menu-icon')
    await userEvent.click(menuIcon)

    // Aguarda até que o ícone de fechar apareça
    await waitFor(() => {
      const closeMenuIcon = screen.getByTestId('close-icon')
      expect(closeMenuIcon).toBeInTheDocument()
    })
  })

  it("should display 'Sobre' title when menu is opened", async () => {
    render(<AsiderMenu />)

    // Clica no ícone de menu para abrir o menu
    const menuIcon = screen.getByTestId('menu-icon')
    await userEvent.click(menuIcon)

    // Verifica se a seção 'Sobre' está visível
    await waitFor(() => {
      const aboutSection = screen.getByText('Sobre')
      expect(aboutSection).toBeInTheDocument()
    })
  })

  it("should close the menu when close icon is clicked", async () => {
    render(<AsiderMenu />)

    // Abre o menu clicando no ícone
    const menuIcon = screen.getByTestId('menu-icon')
    await userEvent.click(menuIcon)

    // Verifica se o ícone de fechar apareceu
    const closeMenuIcon = screen.getByTestId('close-icon')
    expect(closeMenuIcon).toBeInTheDocument()

    // Fecha o menu clicando no ícone de fechar
    await userEvent.click(closeMenuIcon)

    // Aguarda até que o ícone de fechar seja removido
    await waitFor(() => {
      expect(closeMenuIcon).not.toBeInTheDocument()
    })
  })
})