import styled from "styled-components";

export const BaseButton = styled.div<{inverted: boolean, border: boolean, radius: number, padding: string, width?: string, justify?: string, gap?: string}>`
    background: ${({ theme,inverted }) => inverted? theme.text1 : 'transparent'};
    color: ${({ theme,inverted }) => inverted? theme.white : theme.text1};
    border-radius: ${({ radius }) => radius}px;
    border: ${({ border }) => border? '2px solid #273039' : 'none'};
    padding: ${({ padding }) => padding};
    width: ${({ width }) => width? width : 'fit-content'};
    font-family: TT Firs Neue Trial Var Roman;
    font-size: 14px;
    font-weight: 500;
    transition: 0.4s ease-out;
    display: flex;
    align-items: center;
    justify-content: ${({ justify }) => justify? justify : 'center'};
    gap: ${({ gap }) => gap? gap : '0'};
    &:hover {
        background: ${({ theme,inverted }) => inverted? theme.hoverButtonPrimary : theme.text1};
        color: ${({ theme }) => theme.white};
      }
`;