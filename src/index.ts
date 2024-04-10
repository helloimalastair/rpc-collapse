import { DO } from "./DO";

interface Environment {
	DO: DurableObjectNamespace<DO>
}

export default {
	async fetch(_, env) {
		const stub = env.DO.get(env.DO.newUniqueId());
		const fb = await stub.fooBar();
		const bb = await stub.bazBum();
		return new Response();
	}
} satisfies ExportedHandler<Environment>;

export { DO };