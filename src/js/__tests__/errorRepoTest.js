import ErrorRepository from "../errorRepositiry";

test('errorRepoTest', () => {
    expect(new ErrorRepository().translate(1)).toEqual('Имя персонажа задано некорректно');
});

test('errorRepoTestUnknowError', () => {
    expect(new ErrorRepository().translate(10)).toEqual('Unknown error');
});
