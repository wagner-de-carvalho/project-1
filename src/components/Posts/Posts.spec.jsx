import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Posts } from '.'

const props = {
    posts: [
        {
            id: 1,
            title: 'This a classic test title',
            body: 'My message goes to my testing body',
            cover: 'img/img1.png'
        },
        {
            id: 2,
            title: 'Another test title',
            body: 'Just another day at testing body',
            cover: 'img/img2.png'
        }
    ]
};

describe('<Posts />', () => {
    it('should render posts', () => {
        render(<Posts {...props} />)
        expect(screen.getAllByRole('heading', { name: /test title/i }))
            .toHaveLength(2);

        expect(screen.getAllByRole('img', { name: /title/i }))
            .toHaveLength(2);

        expect(screen.getByRole('img', { name: /Another test/i }))
            .toHaveAttribute('src', 'img/img2.png');

        expect(screen.getAllByText(/body/i))
            .toHaveLength(2);
    })

    it('should not render posts', () => {
        render(<Posts />)

        expect(screen.queryByRole('heading', { name: /test title/i }))
            .not.toBeInTheDocument();
    })

    it('should match snapshot', () => {
        const { container } = render(<Posts />)
        expect(container.firstChild).toMatchSnapshot();
    })
})