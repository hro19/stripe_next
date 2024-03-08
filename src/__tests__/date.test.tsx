const sut = {
    purchase: () => {
        const businessHours = [9, 17]
        const currentHour = new Date().getHours()
        const [open, close] = businessHours

        if (currentHour > open && currentHour < close)
            return { message: 'Success' }

        return { message: 'Error' }
    }
}

describe(`購入フローのテスト`, () => {
    beforeEach(() => {
        // Mockを使う
        vi.useFakeTimers()
    })

    afterEach(() => {
        // Mockではなくリアルタイムを使う
        vi.useRealTimers()
    })

    it(`営業時間内の場合、purchase()はサクセスを返す`, () => {
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)
        expect(sut.purchase()).toEqual({ message: 'Success' })
    })

    it(`営業時間外の場合、purchase()はエラーを返す`, () => {
        const date = new Date(2000, 1, 1, 19)
        vi.setSystemTime(date)
        expect(sut.purchase()).toEqual({ message: 'Error' })
    })
})