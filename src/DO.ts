import { DurableObject } from "cloudflare:workers";

type FooBar = {
	foo: string;
}

interface BazBum {
	baz: string;
}

export class DO extends DurableObject {
	fooBar(): FooBar | undefined {
		return {
			foo: "bar"
		};
	}
	bazBumOptional(): BazBum | undefined {
		return {
			baz: "bum"
		};
	}
	bazBum(): BazBum {
		return {
			baz: "bum"
		};
	}
}