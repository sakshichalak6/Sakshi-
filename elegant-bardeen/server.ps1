# Lightweight Localhost Static Web Server for Sakshi's Portfolio
param(
  [int]$Port = 3000
)

$rootDir = $PSScriptRoot
if (-not $rootDir) { $rootDir = Get-Location }

$listener = New-Object System.Net.HttpListener
$url = "http://localhost:$Port/"
$listener.Prefixes.Add($url)

try {
  $listener.Start()
  Write-Host "Server running at $url"
  Write-Host "Serving files from $rootDir"
} catch {
  Write-Host "Failed to start on port $Port, trying 8080..."
  $Port = 8080
  $url = "http://localhost:$Port/"
  $listener = New-Object System.Net.HttpListener
  $listener.Prefixes.Add($url)
  $listener.Start()
  Write-Host "Server running at $url"
}

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8";
  ".htm"  = "text/html; charset=utf-8";
  ".css"  = "text/css; charset=utf-8";
  ".js"   = "application/javascript; charset=utf-8";
  ".jsx"  = "application/javascript; charset=utf-8";
  ".json" = "application/json; charset=utf-8";
  ".jpg"  = "image/jpeg";
  ".jpeg" = "image/jpeg";
  ".png"  = "image/png";
  ".svg"  = "image/svg+xml";
  ".ico"  = "image/x-icon";
  ".txt"  = "text/plain; charset=utf-8"
}

while ($listener.IsListening) {
  try {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $path = $request.Url.LocalPath
    if ($path -eq "/" -or $path -eq "") {
      $path = "/index.html"
    }

    $relativePath = $path.TrimStart('/').Replace('/', '\')
    $filePath = Join-Path $rootDir $relativePath

    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
      $contentType = "application/octet-stream"
      if ($mimeTypes.ContainsKey($ext)) {
        $contentType = $mimeTypes[$ext]
      }
      $response.ContentType = $contentType
      $response.AddHeader("Access-Control-Allow-Origin", "*")

      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $response.ContentLength64 = $bytes.Length
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
      $response.StatusCode = 200
    } else {
      $response.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
      $response.OutputStream.Write($msg, 0, $msg.Length)
    }

    $response.OutputStream.Close()
  } catch {
    # Continue handling next requests
  }
}
