import initComponentOnPage from '../components';
import LikeButton from './like-button';

export default function initLikeButtonOnPage() {
    initComponentOnPage(LikeButton, '.js-like-button');    
}