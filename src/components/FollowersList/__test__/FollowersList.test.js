import { render, screen } from '@testing-library/react'
import FollowersList from "../FollowersList";
import {BrowserRouter} from "react-router-dom";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("Followers List", () => {
    it('Should render follower item', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    });
    
    it('Should render multiple follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElements = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElements.length).toBe(5);
    });
})