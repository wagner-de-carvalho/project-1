const { render, screen } = require("@testing-library/react")
import '@testing-library/jest-dom'
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render POstCard correctly', () => {
        render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: 'Test title' }))
            .toHaveAttribute('src', 'img/img.png')

        expect(screen.getByRole('heading', { name: 'Test title' })).toBeInTheDocument()
        expect(screen.getByText('Testing body')).toBeInTheDocument()

    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />)
        expect(container.firstChild).toMatchSnapshot();
    })
})