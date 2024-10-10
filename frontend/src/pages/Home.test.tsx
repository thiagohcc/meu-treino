import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';  // Importa o MemoryRouter corretamente
import Home from './Home';

// Mock do hook de navegação
const mockedNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');  // Importa o comportamento original
  return {
    ...actual,  // Mantém todos os outros métodos e componentes
    useNavigate: () => mockedNavigate,  // Mocka apenas o useNavigate
  };
});

describe('Home component', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();  // Limpa qualquer histórico do mock anterior
    localStorage.clear();  // Limpa o localStorage entre os testes
  });

  it('should navigate to login if user is not authenticated', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('/login');  // Verifica se o redirecionamento ocorreu
    });
  });

  it('should show loading message while loading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    
    const loadingMessage = screen.getByText(/loading/i);
    expect(loadingMessage).toBeInTheDocument();  // Verifica se a mensagem de loading aparece
  });

  it('should render home component if user is authenticated', async () => {
    // Simulando token no localStorage
    localStorage.setItem('token', 'dummy-token');
    
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Verificando se o componente principal foi renderizado
    const homeElement = await screen.findByTestId('home');
    expect(homeElement).toBeInTheDocument();

    const customerName = screen.getByTestId('customer-name');
    expect(customerName).toHaveTextContent('Customer Name');
  });
});
