export class Horse {
  public name: string;
  public sex: string;
  public age: number;
  public imageUrl: string;

  constructor(
    name: string, 
    sex: string, 
    age: number, 
    imageUrl: string
    ) {
      this.name = name;
      this.sex = sex;
      this.age = age;
      this.imageUrl = imageUrl;
  }
}