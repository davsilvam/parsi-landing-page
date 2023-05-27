import { DefaultTheme } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`	
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
    }

	html {
		-webkit-font-smoothing: antialiased;
	}

	html, body, #root {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	body {
		background-color: #1f2125;
		color: ${({ theme }) => theme.colors.secondary[100]};
	}

	body, input, select, textarea, button {
		font-family: Sora, sans-serif;
		font-weight: 400;
	}

	ul {
		list-style: none;
	}
	
	a {
		text-decoration: none;
		color: inherit;
	}
	
	button {
		cursor: pointer;
	}

	img {
		max-width: 100%;
	}

	@media (max-width: 992px) {
		html {
			font-size: 93.75%;
		}
	}
	
	@media (max-width: 768px) {
		html {
			font-size: 87.5%;
		}
	}
`
