import { DO } from "./DO";

interface Environment {
	DO: DurableObjectNamespace<DO>
}

export default {
	async fetch(_, env) {
		const stub = env.DO.get(env.DO.newUniqueId());
		const fb = await stub.fooBar();
		const bb = stub.bazBum();
		const bbo = await stub.bazBumOptional();
		return new Response();
	}
} satisfies ExportedHandler<Environment>;

export { DO };