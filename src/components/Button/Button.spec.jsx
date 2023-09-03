import '@testing-library/jest-dom'
import { Button } from '.'
import userEvent from '@testing-library/user-event'
const { render, screen } = require("@testing-library/react")

describe('<Button />', () => {
    it('should render the button with the text "Load more"', () => {
        render(<Button text="load more" />)
        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument()
    })

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="load more" onClick={fn} />)

        const button = screen.getByRole('button', { name: /load more/i });
        // fireEvent.click(button)
        userEvent.click(button)

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(1);
    })

    it('should be disabled when disabled is true', () => {

        render(<Button disabled={true} text="load more" />)

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeDisabled();
    })

    it('should be enabled when disabled is false', () => {

        render(<Button disabled={false} text="load more" />)

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).not.toBeDisabled();
        expect(button).toBeEnabled();
    })

    it('should match snapshot', () => {
        const fn = jest.fn();
        const { container } = render(<Button text="Load more" />)
        expect(container.firstChild).toMatchSnapshot();
    })
})