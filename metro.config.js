const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

// getDefaultConfig에서 기본 설정을 가져옵니다.
const defaultConfig = getDefaultConfig(__dirname);

// 기본 자산 확장자 목록에 'obj'를 추가합니다.
const assetExts = defaultConfig.resolver.assetExts;
assetExts.push('obj');
assetExts.push('mtl');
assetExts.push('webp');
// 커스텀 설정을 정의합니다.
const config = {
  resolver: {
    assetExts,
  },
};
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
