require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))
folly_version = '2021.06.28.00-v2'
folly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'

Pod::Spec.new do |s|
  s.name         = "react-native-sanar-telemedicine-rc"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.authors      = package['author']

  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "https://github.com/AgoraIO-Community/react-native-agora.git", :tag => "3.7.1" }

  s.source_files = "ios/**/*.{h,m,mm,swift}"
  s.dependency "AgoraRtcEngine_iOS", "3.7.0.3"
end
