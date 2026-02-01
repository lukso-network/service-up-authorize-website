import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConnectButton } from './ConnectButton';

describe('ConnectButton', () => {
  const defaultProps = {
    isConnected: false,
    isConnecting: false,
    address: null as `0x${string}` | null,
    network: null as string | null,
    onConnect: vi.fn(),
    onDisconnect: vi.fn(),
  };

  it('should render connect button when not connected', () => {
    render(<ConnectButton {...defaultProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Connect Wallet');
  });

  it('should show connecting state', () => {
    render(<ConnectButton {...defaultProps} isConnecting={true} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Connecting...');
    expect(button).toBeDisabled();
  });

  it('should show address when connected', () => {
    render(
      <ConnectButton
        {...defaultProps}
        isConnected={true}
        address="0x1234567890123456789012345678901234567890"
        network="mainnet"
      />
    );
    
    expect(screen.getByText('0x1234...7890')).toBeInTheDocument();
    expect(screen.getByText('mainnet')).toBeInTheDocument();
    expect(screen.getByText('Disconnect')).toBeInTheDocument();
  });

  it('should call onConnect when connect button clicked', () => {
    const onConnect = vi.fn();
    render(<ConnectButton {...defaultProps} onConnect={onConnect} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(onConnect).toHaveBeenCalledTimes(1);
  });

  it('should call onDisconnect when disconnect button clicked', () => {
    const onDisconnect = vi.fn();
    render(
      <ConnectButton
        {...defaultProps}
        isConnected={true}
        address="0x1234567890123456789012345678901234567890"
        network="mainnet"
        onDisconnect={onDisconnect}
      />
    );
    
    fireEvent.click(screen.getByText('Disconnect'));
    expect(onDisconnect).toHaveBeenCalledTimes(1);
  });
});
