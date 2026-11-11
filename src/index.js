import './style.css';
import goblinUrl from './goblin.png';
import { startGame } from './game';

startGame(document.querySelector('#board'), goblinUrl);
