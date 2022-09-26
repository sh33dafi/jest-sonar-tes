describe('description', () => {
    it('this is a success', () => {
        expect(true).toEqual(true);
    });

    it('this is a failure', () => {
        expect(true).toEqual(true);
    });

});

describe.skip('Completely skipped suite', () => {
    it('some test', () => {})
    it('this is a success', () => {
        expect(true).toEqual(true);
    });

    it('this is a failure', () => {
        expect(true).toEqual(false);
    });

    describe('sub test', () => {
        it('success', () => {
            expect(true).toEqual(true);
        });
    });
})
