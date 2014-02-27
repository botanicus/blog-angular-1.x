#!/usr/bin/env rackup --port=4000

# On whatever route just serve index.html.
# When you click the about link in the app, Angular takes care of getting you to the proper page.
# When you are out of the scope of the app, it's the server who responds to those requests.

# Later this will be solved through Nginx.
# If static, serve, otherwise serve index.html.

def read_body(path = 'index.html')
  File.read(path)
end

def headers(body, extra = Hash.new)
  {'Content-Type' => 'text/html', 'Content-Length' => body.bytesize.to_s}.merge(extra)
end

run lambda { |env|
  potential_file_path = "./#{env['PATH_INFO']}"
  if File.file?(potential_file_path)
    body = read_body(potential_file_path)
    type = case potential_file_path
    when /\.css$/ then 'css'
    when /\.js$/  then 'javascript' end
    [200, headers(body, 'Content-Type' => "text/#{type}"), [body]]
  else
    body = read_body
    [200, headers(body), [body]]
  end
}
