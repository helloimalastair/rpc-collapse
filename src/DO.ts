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
	bazBum(): BazBum | undefined {
		return {
			baz: "bum"
		};
	}
}