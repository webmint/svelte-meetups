export default class Meetup {
  constructor() {
    this.id = Math.random().toString();
    this.title = '';
    this.subtitle = '';
    this.description = '';
    this.address = '';
    this.contactEmail = '';
    this.imageUrl = 'https://picsum.photos/376/200.jpg';
    this.isFavorite = false;
  }
}
