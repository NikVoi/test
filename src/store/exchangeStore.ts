// src/store/CryptoStore.ts
import { makeAutoObservable } from 'mobx'
import { fetchCoins } from '../api/coins'
import { fetchConversionRate } from '../api/conversion'
import { Coin } from '../types/types'

class CryptoStore {
	coins: Coin[] = []
	fromCoinId: number = 1
	toCoinId: number = 2
	amount: number = 0.01
	conversionRate: number = 1
	loading: boolean = false
	error: string = ''

	constructor() {
		makeAutoObservable(this)
	}

	async loadCoins() {
		this.loading = true
		try {
			this.coins = await fetchCoins()

			if (this.coins.length > 0) {
				this.fromCoinId = this.coins[0].id
				this.toCoinId = this.coins[1]?.id || this.coins[0].id
			}
		} catch (error) {
			this.error = 'Failed to load coins'
		} finally {
			this.loading = false
		}
	}

	async updateConversionRate() {
		if (this.amount > 0) {
			this.loading = true
			this.error = ''
			try {
				this.conversionRate = await fetchConversionRate(
					this.fromCoinId,
					this.toCoinId
				)
			} catch (error) {
				this.error = 'Failed to fetch exchange rate'
			} finally {
				this.loading = false
			}
		}
	}

	setFromCoinId(id: number) {
		this.fromCoinId = id
		this.updateConversionRate()
	}

	setToCoinId(id: number) {
		this.toCoinId = id
		this.updateConversionRate()
	}

	setAmount(value: number) {
		this.amount = value
		this.updateConversionRate()
	}

	get convertedAmount(): number {
		return this.amount * this.conversionRate
	}
}

export const store = new CryptoStore()
