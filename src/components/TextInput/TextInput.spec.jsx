import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { TextInput } from '.';
import userEvent from "@testing-library/user-event";

describe('<TextInput />', () => {
    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} />);

        const input = screen.getByPlaceholderText(/type here your search/i)
        const inputValue = 'test'

        userEvent.type(input, inputValue);
        expect(input.value).toBe(inputValue)
        expect(fn).toHaveBeenCalledTimes(inputValue.length)

    })

    it('should have a value of searchValue', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={'test'} />);
        const input = screen.getByPlaceholderText(/type here your search/i)

        expect(input).toBeInTheDocument()
        expect(input.value).toBe('test')
    })

    it('should match snapshot', () => {
        const fn = jest.fn();
        const { container } = render(<TextInput handleChange={fn} />)
        expect(container.firstChild).toMatchSnapshot();
    })
})