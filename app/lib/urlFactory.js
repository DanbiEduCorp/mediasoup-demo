let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId, consumerReplicas })
{
	// const hostname = window.location.hostname;
	const hostname = 'ms.nightowl.click';

	return `ws://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}&consumerReplicas=${consumerReplicas}`;
}
